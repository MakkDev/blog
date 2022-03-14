import Sidebar from '../../components/sidebar/Sidebar';
import './write.css';

export default function Write() {
    return (
        <>
        <div className='write'>
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input id='fileInput' type="file" style={{ display: "none" }} />
                    <input className='textInputTitle' placeholder='Title' type="text" autoFocus={true} />
                </div>
                <div className='writeFormGroup'>
                    <textarea className='textInput' placeholder="Tell me your story....." type="text"></textarea>
                                  
                </div>
                <button> Submit </button>  
                
            </form>
            
        </div>
        
        </>
    )
}
