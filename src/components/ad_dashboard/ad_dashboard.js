import CreateTrainer from "../createProfile/CreateTrainerProfile";
import CreateTrainerProfile from "../createProfile/CreateTrainerProfile";
import { FirstHome } from "../hameCard/homeCars";
import DashNavbar from "../nav/nav";
import MainComponent from "../nav/sidbar";
import SideBar from "../nav/sidbar";
import './ad_dashboard.css'

export function Ad_dashboardhome() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar/>
          </div>
          <div className="dashside d-flex">
            <MainComponent className="maincomp " />
            <FirstHome/>
          </div>
          
        </div>
      </>
    );
  }

  export function Ad_dashboardCreate() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="dashside d-flex">
            <MainComponent className="maincomp " />
            <div ><CreateTrainer /></div>
          </div>
        </div>
      </>
    );
  }

  export function AdStu_dashboardCreate() {
    return (
      <>
        <div className="dashbody">
          <div className="dashnav">
            <DashNavbar />
          </div>
          <div className="dashside d-flex">
            <MainComponent className="maincomp " />
            <div ><CreateTrainer /></div>
          </div>
        </div>
      </>
    );
  }