import ResidentialFleet from "./residential-fleet/ResidentialFleet";
import styles from './Body.module.css';
// import DashBoard from "./residential-fleet/analytics/Dashboard";

function Body () {
    return (
        <div className={styles.container}>
            <ResidentialFleet />
            {/* <DashBoard /> */}
        </div>
    );
}

export default Body;