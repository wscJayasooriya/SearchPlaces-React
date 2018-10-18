import React,{Component} from 'react';

class Search extends Component{

    getKey(e){
        e.preventDefault();
        const keyTyped = this.refs.inputword.value;
        console.log(keyTyped);
    }

    render(){

        return(
            <form className="form-horizontal">
              <fieldset>
                  <legend>Search Near by Places</legend>
                  <div className="col-md-10">
                    <div className="form-group">
                    <label htmlFor="inputPlace" className="col-lg-2 ccontrol-label">Place</label>
                    <div className="col-lg-10">
                      <input type="text" className="form-controll" id="inputPlace" placeholder="Search here" ref="inputword"/>
                    </div>
                  </div>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-primary" onClick={this.getKey.bind(this)}>Search</button>
                  </div>
              </fieldset>
            </form>
        )

    }
}

export default Search;