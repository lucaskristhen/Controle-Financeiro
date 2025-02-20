import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {
constructor() {
      super();
this.state = {
        description: '',
        amount: '',
        month: '',
        year: '',
        messageFromServer: '',
        modalIsOpen: false
      }
this.handleSelectChange = this.handleSelectChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewExpense = this.insertNewExpense.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        modalIsOpen: false,
        description: '',
        amount: '',
        month: 'Jan',
        year: 2016,
        messageFromServer: ''
      });
    }
componentDidMount() {
    if(this.props.selectedMonth == 'All'){
      this.setState({
        month: 'Jan'
      });
    }else{
      this.setState({
        month: this.props.selectedMonth
      });
    }

      this.setState({
        year: this.props.selectedYear
      });
    }
componentWillReceiveProps(nextProps){
      if(this.props.selectedMonth == 'All'){
        this.setState({
          month: 'Jan'
        });
      }else{
        this.setState({
          month: this.props.selectedMonth
        });
      }

      this.setState({
        year:nextProps.selectedYear
      })
    }
handleSelectChange(e) {
      if (e.target.name == 'month') {
        this.setState({
          month: e.target.value
        });
      }
      if (e.target.name == 'year') {
        this.setState({
          year: e.target.value
        });
      }
    }
onClick(e) {
      this.insertNewExpense(this);
    }
insertNewExpense(e) {
    var expense = {
      description: e.state.description,
      amount: e.state.amount,
      month: e.state.month,
      year: e.state.year
    }
      axios.post('http://localhost:8080/expense', expense).then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
      });
    }
handleTextChange(e) {
      if (e.target.name == "description") {
        this.setState({
          description: e.target.value
        });
      }
if (e.target.name == "amount") {
        this.setState({
          amount: e.target.value
        });
      }
    }
render() {
   if(this.state.messageFromServer == ''){
      return (
        <div>
      <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Expense"
       className="Modal">
<Link to={{pathname: '/', search: '?month='+this.state.month+'&year='+this.state.year }} style={{ textDecoration: 'none' }}>
       <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
      </Link><br/>
<fieldset>
       <label for="description">Descrição:</label><input type="text" id="description" name="description" value={this.state.description} onChange={this.handleTextChange}></input>
       <label for="amount">Valor:</label><input type="number" id="amount" name="amount" value={this.state.amount} onChange={this.handleTextChange}></input>
       <label for="month">Mês</label><select id="month" name="month" value={this.state.month} onChange={this.handleSelectChange}>
            <option value="Jan" id="Jan">Janeiro</option>
            <option value="Fev" id="Fev">Fevereiro</option>
            <option value="Mar" id="Mar">Março</option>
            <option value="Abr" id="Abr">Abril</option>
            <option value="Mai" id="Mai">Maio</option>
            <option value="Jun" id="Jun">Junho</option>
            <option value="Jul" id="Jul">Julho</option>
            <option value="Ago" id="Ago">Agosto</option>
            <option value="Set" id="Set">Setembro</option>
            <option value="Out" id="Out">Outubro</option>
            <option value="Nov" id="Nov">Novembro</option>
            <option value="Dez" id="Dez">Dezembro</option>
         </select>
       <label for="year">Ano:</label><select id="year" name="year" value={this.state.year} onChange={this.handleSelectChange}>
            <option value="2015" id="17">2015</option>
            <option value="2016" id="17">2016</option>
            <option value="2017" id="17">2017</option>
            <option value="2018" id="18">2018</option>
            <option value="2019" id="19">2019</option>
            <option value="2020" id="20">2020</option>
         </select>
      </fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Adicionar Despesa</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add Expense"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/', search: '?month='+this.state.month+'&year='+this.state.year}} style={{ textDecoration: 'none' }}>
         <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Fechar</Button>
        </Link>
       </div>
      </Modal>
       </div>
     )
    }
   }
}
export default Add;
