pragma solidity 0.6.11;


contract Bridge {

    struct Job {
        string url;
        string selector;
        string name;
        uint256 result;
    }

    mapping (uint256 => uint256) public results;
    mapping (uint256 => Job) public jobs;
    address public owner = msg.sender;

    function setResult(uint256 id, uint256 result) external {
        require(msg.sender == owner);
        results[id] = result;
    }

    function setJob(uint256 id, string calldata url, string calldata selector, string calldata name, uint256 result) external {
        require(msg.sender == owner);
        jobs[id] = Job(url, selector, name, result);
    }

    function getResult(uint256 id) external view returns(uint256) {
        return results[id];
    }

    function getJob(uint256 id) external view returns(string memory url, string memory selector, string memory name, uint256 result) {
        return (jobs[id].url, jobs[id].selector, jobs[id].name, jobs[id].result);
    }

}
