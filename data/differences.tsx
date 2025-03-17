import Coins from "/public/static/images/differences/coins.svg";
import Credit from "/public/static/images/differences/creditCard.svg";
import Marketplace from "/public/static/images/differences/marketplace.svg";
import Gift from "/public/static/images/differences/gift.svg";
import House from "/public/static/images/differences/houseHand.svg";
import Interface from "/public/static/images/differences/interface.svg";
import Reward from "/public/static/images/differences/reward.svg";
import World from "/public/static/images/differences/world.svg";

export const differences = [
    {
        icon: World,
        name: (
            <>
                <div>Tokenization of </div>
                <div> Real World Assets</div>
            </>
        ),
        description: "Redefined ownership, users benefit from unprecedented flexibility and accessibility thanks to fractional stakes in real estate and private credit.",
    },
    {
        icon: House,
        name: (
            <>
                <div>Disruptive </div>
                <div> Real Estate</div>
            </>
        ),
        description: "Democratized access to exclusive real estate opportunities featuring exotic properties and high-return investments without the need for significant capital.",
    },
    {
        icon: Credit,
        name: (
            <>
                <div>Private Credit Money</div>
                <div> Services Businesses</div>
            </>
        ),
        description: "Revolutionizes cross-border payments by connecting Web3 lenders with global paymant entities, challenging SWIFT's pre-funding model. Unlike the capital-intensive and inflexible processes of traditional systems, xPAY ensures real-time liquidity, liberating bussinesses from fund locking.",
        minorPaddingTop: true,
    },
    {
        icon: Interface,
        name: (
            <>
                <div>Transparency and </div>
                <div> User-Friendly Interface</div>
            </>
        ),
        description: "Effortlessly monitor your investments in real-time on our user-friendly platform, coupled with transparent governance processes for clarity and trust.",
    },
    {
        icon: Reward,
        name: (
            <>
                <div>Staking for </div>
                <div> Enhanced Rewards</div>
            </>
        ),
        description: "Maximize Returns staking your JUN tokens to earn a share of the platform's revenue.",
    },
    {
        icon: Coins,
        name: (
            <>
                <div>Regulatory</div>
                <div> Compliant Investments</div>
            </>
        ),
        description: "Security is paramount, invest with confidence, knowing your assets are protected within a secure, and fully compliant framework.",
    },
    {
        icon: Marketplace,
        name: (
            <>
                <div>RWA Secondary</div>
                <div> Marketplace</div>
            </>
        ),
        description: 'The "Increased Liquidity" point emphasizes making Real World Assets (RWAs) more liquid, enabling smoother and quicker transactions in the marketplace.',
    },
];
