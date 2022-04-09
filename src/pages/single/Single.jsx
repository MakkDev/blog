import "./single.css";
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single(props) {
  return (
    <div className='single'> 
    <SinglePost
    title = "Hot Wallets vs Cold Wallets" 
    postDate ="3/21/2022"
    postThumbnail = {"/images/blogHotvsColdthumbnail.png"}
    firstParagraph ="If you hold a significant amount of cryptocurrency on an exchange, it might be a good idea to ditch your custodian and invest in a crypto wallet in which you can hold your own private keys. While it is true that some large exchanges such as Coinbase have built a strong security-focused reputation, it is nevertheless still imperative to have at least a portion of your crypto holdings stored in a cold wallet in case of an exploit. But let's start off by answering the fundemental questions: what is a cold wallet and how does storing crypto on a cold wallet differ from storing crypto on a software based hot wallet? " 
    secondParagraph ="The main difference between a hot wallet and a cold wallet is that a cold wallet is not connected to the internet while a hot wallet is. This means that compared to hot wallets, cold wallets are much less vulnerable to attacks by hackers. However, as a consequence of this heightened level of security, using a cold wallet for day to day transactions is much less convenient than using a hot wallet. This is due to the fact that you must physically plug your hardware device into a computer each and every time you want to make a transaction, as opposed to simply logging in using your credentials like you would with a hot wallet. For most crypto investors, using a combination of both cold and hot wallet is ideal. Why not enjoy both the convenience of a hot wallet and the security of a cold wallet? " 
    thirdParagraph ="A common trend is to store a vast majority of one's crypto in a cold wallet and send only small amounts to a hot wallet as needed for transactions. Hot wallets are much more accessible than hardware wallets and allow you to make transactions far more easily, so having a hot wallet ready to use can save you a lot of time. On the other hand, cold wallets are much more secure than hot wallets, so having all your funds on a hot wallet would also be a bad idea. Therefore, taking the dual wallet approach mentioned above offers us the best of both worlds and is ideal for most investors with significant crypto holdings.  " />
    
     </div>
  )
}
