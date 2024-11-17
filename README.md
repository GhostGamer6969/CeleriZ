# CeleriZ

## Overview
Our cross-border payment system enables users to make low-cost transactions across the globe, leveraging blockchain technology for fast, secure, and affordable transfers. With integrations to cutting-edge technologies like Kinto, Arbitium, Circle, Pyth Network, Chainlink, and The Graph, we provide a seamless user experience with real-time data insights and competitive exchange rates.

## Key Features
- **Low-Cost Transactions**: Powered by Arbitium's Layer 2 blockchain, our system offers significantly lower fees compared to traditional payment methods.
- **Global Payments**: Users can send and receive payments in multiple currencies using Circle's USDC and the Cross-Chain Transfer Protocol (CCTP).
- **Real-Time Exchange Rates**: Pyth Network integration ensures users get the best exchange rates for currency conversion.
- **Cross-Chain Compatibility**: Future integration of Chainlink’s Cross-Chain Interoperability Protocol (CCIP) allows for seamless transactions across multiple blockchains.
- **Transaction Insights**: Powered by The Graph, users can track their spending, savings, and transaction history in real time.

## Technologies Used

### Core Technologies
- **Kinto**: KYC and AML compliance to verify user identities and ensure regulatory adherence.
- **Arbitium**: Layer 2 solution for faster, more cost-effective transactions.
- **Circle’s USDC & CCTP**: USDC stablecoin for multi-currency payments and CCTP for seamless cross-chain transfers.
- **Pyth Network**: Real-time financial data feeds for accurate and up-to-date exchange rates.
- **Chainlink CCIP**: Cross-chain interoperability for smooth transactions across various blockchain networks.
- **The Graph**: Data transparency and analytics for tracking user transactions and savings.

### Technology Stack
- **Frontend**: React, Redux for state management, Web3.js, Ethers.js for blockchain interactions.
- **Backend**: Node.js, Express.js, MongoDB for storing user data and transaction details.
- **Smart Contracts**: Solidity for custom smart contracts deployed on Ethereum and Arbitium.
- **Oracles**: Integration of Pyth Network and Chainlink for real-time exchange rates and cross-chain transfers.

## Future Plans
- **Pyth Network Integration**: Adding support for real-time exchange rates to ensure users always get the best deal.
- **Chainlink CCIP**: Enhancing cross-chain functionality to enable transactions across multiple blockchain ecosystems.
- **Advanced Analytics**: Adding more detailed insights into user spending and savings, further enhancing transparency.

## Getting Started

### Prerequisites
To run the project locally, you’ll need:
- Node.js and npm
- MetaMask or any Web3-compatible wallet
- Access to an Ethereum or Arbitium testnet

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cross-border-payment-system.git
   cd cross-border-payment-system
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   - Configure your API keys for Circle, Kinto, Pyth Network, and Chainlink in a `.env` file.

4. Run the application:
   ```bash
   yarn dev
   ```

5. Visit `http://localhost:3001` in your browser to interact with the application.
