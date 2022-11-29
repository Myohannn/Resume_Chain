// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Resume {
    struct resume {
        uint256 timestamp;
        string _workExp;
        string _eduExp;
        string _contact;
    }

    mapping(string => resume[]) resumeMap;

    function store(
        string memory _key,
        string memory _workExp,
        string memory _eduExp,
        string memory _contact
    ) public {
        resumeMap[_key].push(
            resume(block.timestamp, _workExp, _eduExp, _contact)
        );
    }

    function length(string memory _key) public view returns (uint256) {
        return resumeMap[_key].length;
    }

    function retrieve(string memory _key, uint256 index)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            string memory
        )
    {
        return (
            resumeMap[_key][index].timestamp,
            resumeMap[_key][index]._workExp,
            resumeMap[_key][index]._eduExp,
            resumeMap[_key][index]._contact
        );
    }
}



