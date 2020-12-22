import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap'
import MonthTabsRouter from './monthTabsRouter'
import YearTabsRouter  from './yearTabsRouter'

class MonthTabs extends React.Component {
 constructor(){
  super();
  this.state = {activeTab:''};
  this.handleSelect = this.handleSelect.bind(this);
}
componentWillReceiveProps(nextProps) {
    this.setState({activeTab:this.props.year+'-'+nextProps.monthlyActiveTab});
  }
handleSelect(selectedTab) {
     this.setState({
       activeTab: selectedTab
     });
 }
render(){
  return <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey={this.props.year+'-Todos'} title={<MonthTabsRouter tabId='Todos' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Jan'} title={<MonthTabsRouter tabId='Jan' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Fev'} title={<MonthTabsRouter tabId='Fev' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Mar'} title={<MonthTabsRouter tabId='Mar' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Abr'} title={<MonthTabsRouter tabId='Abr' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Mai'} title={<MonthTabsRouter tabId='Mai' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Jun'} title={<MonthTabsRouter tabId='Jun' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Jul'} title={<MonthTabsRouter tabId='Jul' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Ago'} title={<MonthTabsRouter tabId='Ago' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Set'} title={<MonthTabsRouter tabId='Set' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Out'} title={<MonthTabsRouter tabId='Out' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Nov'} title={<MonthTabsRouter tabId='Nov' year={this.props.year}/>}></Tab>
            <Tab eventKey={this.props.year+'-Dez'} title={<MonthTabsRouter tabId='Dez' year={this.props.year}/>}></Tab>
    </Tabs>
}
}
export default MonthTabs;
