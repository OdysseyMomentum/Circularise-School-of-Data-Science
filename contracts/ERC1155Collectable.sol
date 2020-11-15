// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155Pausable.sol";

/**
 * @dev {ERC1155} token, including:
 *
 *  - ability for holders to burn (destroy) their tokens
 *  - a minter role that allows for token minting (creation)
 *  - a pauser role that allows to stop all token transfers
 *
 * This contract uses {AccessControl} to lock permissioned functions using the
 * different roles - head to its documentation for details.
 *
 * The account that deploys the contract will be granted the minter and pauser
 * roles, as well as the default admin role, which will let it grant both minter
 * and pauser roles to other accounts.
 */
contract ERC1155Collectable is Context, AccessControl, ERC1155Burnable, ERC1155Pausable {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    uint256 public current_id;

    /**
     * @dev Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE`, and `PAUSER_ROLE` to the account that
     * deploys the contract.
     */
    constructor(string memory uri) public ERC1155(uri) {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(MINTER_ROLE, _msgSender());
        _setupRole(PAUSER_ROLE, _msgSender());

    }

    struct WasteToken {
        address creator;
        bool certified;
        uint256 social;
        uint256 environment;
        uint256 impact;
        uint256 booster;
    }

    mapping (uint256 => WasteToken) public tokenList;

    /**
     * @dev Creates `amount` new tokens for `to`, of token type `id`.
     *
     * See {ERC1155-_mint}.
     *
     * Requirements:
     *
     * - the caller must have the `MINTER_ROLE`.
     */
    function mintWasteToken(address to, uint256 amount, bool certified, uint256 social, uint256 environment, uint256 impact, uint256 booster) public virtual returns(uint256) {
        require(hasRole(MINTER_ROLE, _msgSender()), "ERC1155PresetMinterPauser: must have minter role to mint");

        tokenList[current_id] = WasteToken(to, certified, social, environment, impact, booster);

        _mint(to, current_id, amount, "");
        
        current_id += 1;
        
        return current_id - 1;
    }

    function burnWasteToken(address owner, uint256 amount, uint256 id) public virtual {
        require(hasRole(MINTER_ROLE, _msgSender()), "ERC1155PresetMinterPauser: must have minter role to mint");

        _burn(owner, id, amount);
                
    }

    function getToken(uint256 id) public view returns (address, bool, uint256[] memory) {
        require(id < current_id, "id does not exist yet");

        address creator = tokenList[id].creator;
        bool certified = tokenList[id].certified;
        uint256[] memory balances = new uint256[](4);
        balances[0] = tokenList[id].social;
        balances[1] = tokenList[id].environment;
        balances[2] = tokenList[id].impact;
        balances[3] = tokenList[id].booster;

        return (creator, certified, balances);
    }

    function getTokenBalance(address owner, uint256 id) public view returns (uint256) {
        require(owner != address(0), "ERC1155: batch balance query for the zero address");

        return balanceOf(owner, id);
    }

    function getTokenBalances(address owner) public view returns (uint256[] memory) {
        require(owner != address(0), "ERC1155: batch balance query for the zero address");

        uint256[] memory tokenBalances = new uint256[](current_id + 1);

        for (uint256 i = 0; i < current_id + 1; ++i) {
            tokenBalances[i] = balanceOf(owner, i);
        }

        return tokenBalances;
    }

    /**
     * @dev Pauses all token transfers.
     *
     * See {ERC1155Pausable} and {Pausable-_pause}.
     *
     * Requirements:
     *
     * - the caller must have the `PAUSER_ROLE`.
     */
    function pause() public virtual {
        require(hasRole(PAUSER_ROLE, _msgSender()), "ERC1155PresetMinterPauser: must have pauser role to pause");
        _pause();
    }

    /**
     * @dev Unpauses all token transfers.
     *
     * See {ERC1155Pausable} and {Pausable-_unpause}.
     *
     * Requirements:
     *
     * - the caller must have the `PAUSER_ROLE`.
     */
    function unpause() public virtual {
        require(hasRole(PAUSER_ROLE, _msgSender()), "ERC1155PresetMinterPauser: must have pauser role to unpause");
        _unpause();
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    )
        internal virtual override(ERC1155, ERC1155Pausable)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
