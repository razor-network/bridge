pragma solidity 0.5.10;


contract Bridge {

    mapping (uint256 => uint256) results;
    address public owner = msg.sender;

    function setResult(uint256 id, uint256 result) external {
        require(msg.sender == owner);
        results[id] = result;
    }

    function getResult(uint256 id) external view returns(uint256) {
        return results[id];
    }
}
