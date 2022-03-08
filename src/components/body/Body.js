import ResidentialFleet from "./residential-fleet/ResidentialFleet";
import styles from './Body.module.css';

function Body () {
    return (
        <div className={styles.container}>
            <ResidentialFleet />
        </div>
    );
}

export default Body;