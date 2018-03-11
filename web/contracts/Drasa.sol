pragma solidity ^0.4.18;

contract Drasa {

  struct Patient {
    bool exists;
    bytes32 MCP;
    bytes32[] chatHistory;
    bytes32[] kitRequests;
  }
  
  mapping(uint => Patient) patients;

  event PatientRegistered(uint patientId);
  event ChatSessionStarted(uint patientId);
  event ChatSessionEnded(uint patientId);
  event KitRequested(uint patientId);


  function register(uint id, bytes32 hashedMCP) public returns(bool) {
    assert(!patients[id].exists);

    Patient memory p;
    p.MCP = hashedMCP;
    p.exists = true;
    patients[id] = p;
    
    emit PatientRegistered(id);
    return true;
  }

  function startChat(uint id) public returns(bool) {
    assert(patients[id].exists);
    emit ChatSessionStarted(id);
    return true;
  }

  function endChat(uint id, bytes32 hashedChat) public returns(bool) {
    assert(patients[id].exists);
    patients[id].chatHistory.push(hashedChat);
    emit ChatSessionEnded(id);
    return true;
  }

  function requestKit(uint id, bytes32 hashedKitInfo) public returns(bool) {
    assert(patients[id].exists);
    patients[id].kitRequests.push(hashedKitInfo);
    emit KitRequested(id);
    return true;
  }

}