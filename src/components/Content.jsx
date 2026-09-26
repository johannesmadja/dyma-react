import styles from './Content.module.scss';
import Recipe from './Recipe';

function Content() {
    return (
    <div className="flex-fill container p-20" >
        <h1 className='my-30'>Découvrez nos nouvelles recettes</h1>

        <div className={`p-20 card ${ styles.contentCard}`}>
            <div className={`${ styles.grid}`}>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
            </div>
          
        </div>
    </div>
)
}

export default Content;