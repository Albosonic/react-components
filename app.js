
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
    //this.mouseOver=this.mouseOver.bind(this);
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  //hover
  mouseOver() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    /*var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };*/
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.mouseOver.bind(this)}>{this.props.item}</li>
    );
  }
}



var App = () => (
  <div>Todo
    <GroceryList items= {['cuc,', 'choc', 'milk']}/>
  </div>
)

var GroceryList = (props) => (
  <ul>Grocery List
    {/* A JSX comment */}
    {props.items.map(item =>
      <GroceryListItem item={item} />

      )}
  </ul>
)

ReactDOM.render(<App />, document.getElementById('app'));
