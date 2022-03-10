import ResidentialFleet from "./residential-fleet/ResidentialFleet";
import styles from './Body.module.css';
import DoughnutChart from "./residential-fleet/analytics/DoughnutChart";
// import DashBoard from "./residential-fleet/analytics/Dashboard";

function Body () {
    return (
        <div className={styles.container}>
            <ResidentialFleet />
            {/* <DoughnutChart /> */}
            {/* <DashBoard /> */}
        </div>
    );
}

export default Body;