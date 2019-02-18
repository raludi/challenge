import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import theme from '../../theme';
import { connect } from 'react-redux';
import { getFilters, actions as filterActions } from '../../redux/modules/filters/filters';
import { actions as transactionsActions } from '../../redux/modules/transactions/transactions';
import { bindActionCreators } from 'redux';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 2em;
  position: relative;
  background-color: #fff;
  white-space: nowrap;
  overflow: hidden;
  font-weight: ${theme.weights.bold}
  border: 1px solid ${theme.colors.topaz}
  border-bottom: ${props => props.listOpen ? 'none': `1px solid ${theme.colors.topaz}` };
`

const TitleStyled = styled.div`
  margin: 2px 20px;
  color: ${theme.colors.cobalt}
  margin-right: 30px;
  white-space: nowrap;
  overflow: hidden;
`

const ListStyled = styled.ul`
  z-index: 10;
  width: 100%;
  position: absolute;
  background-color: #fff;
  padding: 15px 0;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid ${theme.colors.topaz}
  border-top: none;
`

const ItemStyled = styled.li`
  width: 100%;
  padding: 8px 10px;
  line-height: 1.6rem;
  cursor: default;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.cobalt};
  &.selected {
      color: ${theme.colors.cobalt};
      background-color: ${theme.colors.lightGray};
      font-weight: ${theme.weights.bold}
  }
  &:hover {
      color: ${theme.colors.cobalt};
      background-color: ${theme.colors.lightGray};
  }
`

class Dropdown extends Component{

  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  componentDidUpdate(){
    const { listOpen } = this.state
    setTimeout(() => {
      if(listOpen)
        window.addEventListener('click', this.close)
      else 
        window.removeEventListener('click', this.close)
    }, 0)
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.close)
  }

  close = () => {
    this.setState({
      listOpen: false
    })
  }
  
  selectItem(idx, selected){
    const { id, filterAction, transaction} = this.props;
    filterAction.updateFilter({id, idx, selected});
    transaction.filterTransactions()
    this.setState({
      listOpen: false
    })
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const { filters } = this.props
    const { listOpen, headerTitle } = this.state
    return(
        <div style={{margin: 3, position: 'relative'}}>
          <HeaderStyled listOpen={listOpen} onClick={() => this.toggleList()}>
              <TitleStyled>{headerTitle}</TitleStyled>
                <i style={{marginRight: 10, color: theme.colors.cobalt}} className={`fas fa-angle-${listOpen ? 'up' : 'down'}`}></i>         
          </HeaderStyled>
          {listOpen && <ListStyled onClick={e => e.stopPropagation()}>
            {filters.map((item, idx)=> (
              <ItemStyled selected={item.selected} listOpen={listOpen} key={idx} onClick={() => this.selectItem(idx, item.selected)}>{item.title} {item.selected && <FontAwesome name="check"/>}</ItemStyled>
            ))} 
          </ListStyled>}
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filters: getFilters(state, ownProps.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     filterAction: bindActionCreators(filterActions, dispatch),
     transaction: bindActionCreators(transactionsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)