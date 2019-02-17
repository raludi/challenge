import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import theme from '../../theme';

const HeaderStyled = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
line-height: 38px;
position: relative;
background-color: #fff;
border-radius: 5px;
`
const TitleStyled = styled.div`
margin: 2px 20px;
color: ${theme.colors.cobalt}
margin-right: 30px;
`
const ListStyled = styled.ul`
z-index: 10;
width: inherit;
position: absolute;
border: 1px solid #dfdfdf;
border-top: none;
border-bottom-right-radius: 3px;
border-bottom-left-radius: 3px;
background-color: #fff;
padding: 15px 0;
max-height: 200px;
width: inherit;
overflow-y: auto;
border-radius: 10px;
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
      if(listOpen){
        window.addEventListener('click', this.close)
      }
      else{
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.close)
  }


  selectItem(title, id, stateKey){
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
    const {list, width} = this.props
    const {listOpen, headerTitle} = this.state
    return(
        <div style={{margin: 3, width}}>
        <HeaderStyled onClick={() => this.toggleList()}>
            <TitleStyled>{headerTitle}</TitleStyled>
               <i style={{marginRight: 10, color: theme.colors.cobalt}} className={`fas fa-angle-${listOpen ? 'up' : 'down'}`}></i>         
        </HeaderStyled>
        {listOpen && <ListStyled onClick={e => e.stopPropagation()}>
          {list.map((item)=> (
            <ItemStyled key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>{item.title} {item.selected && <FontAwesome name="check"/>}</ItemStyled>
          ))} 
        </ListStyled>}
      </div>
    )
  }
}

export default Dropdown