
import CardBoard from './client/containers/CardBoard';
// import Filter from './client/containers/Filter'
// import TableTest3 from './containers/TableTest3';
import TableContainer from './client/containers/TableContainer';
import UsageCalendar from './client/containers/UsageCalendar';
import UsageOverTime from './client/containers/UsageOverTime';
import ContainerChart from './client/containers/ContainerChart';
import ContainerLineChart from './client/containers/ContainerLineChart';
import LastUpdate from './client/components/LastUpdate';
import './App.css';
import FilterProject from './client/containers/FilterProject';







function App() {
  return (
    <div>
      <CardBoard />
      {/* <Filter /> */}
      <FilterProject />
      {/* <TableTest3 /> */}
      <TableContainer />
      <UsageCalendar />
      <ContainerChart />
      <br></br>
      <br></br>
      <br></br>
      <UsageOverTime />
      <ContainerLineChart />
      <br></br>
      <br></br>
      <LastUpdate />
    </div >
  );
}

export default App;
