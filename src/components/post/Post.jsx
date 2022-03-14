import Single from '../../pages/single/Single';
import './post.css'
import { Link } from 'react-router-dom';


export default function Post() {
  return <div className="post">
    <a href='/single'>
      <img className="postImg" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F10%2F19%2Fseljalandsfoss-iceland-1-WATERFALLS1021.jpg" to='/single' />
    </a>

    <div className="postInfo">
      <div className="postCats">
        <span className="postCat"> Traditional Tech</span>
        <span className="postCat"> Blockchain Tech</span>
        <span className="postCat"> Trading</span>
      </div>
      <hr />
      <Link to='/single' className="postTitle" style={{ textDecoration: 'none', color: 'inherit' }} >My First Post</Link>
      <span className="postDate">1 Hour Ago</span>
    </div>
    <p className="postDesc">
      Proposed in 2017 by former Coinbase CTO, Balaji S. Srinivasan, the Nakamoto coefficient measures the number of entities that one needs to control to be able to compromise the network.
      In many Proof-of-Stake networks, a 2/3 majority is needed to confirm blocks, thus, acquiring 33% of the total stake is all that’s required to compromise the entire network.
      The Nakamoto co-efficient not only takes the number of validators into account, but also the distribution of the stake amongst those validators. For example, a Nakamoto coefficient of 4 indicates that the coordination of only 4 validators is needed to reach 33% of the total stake, which would then allow them to halt the network.
    </p>
  </div>;
}
