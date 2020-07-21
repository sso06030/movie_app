import React from "react"
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state ===undefined){
            history.push("/");
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            console.log(location.state);
            const state = location.state;
            return (

                <div className="detail">
                <img src={state.poster} alt={state.title} title={state.title}/>
                    <div className="detail__data">
                        <h3 className="detail__title">{state.title}</h3>
                        <h5 className="detail__year">{state.year}</h5>
                        <ul className="detail__genres">
                            {state.genres.map((genre, index) =>(
                                <li 
                                    key={index} className="genres__genre">
                                    {genre}
                                </li>
                            ))}
                        </ul>
                        <p className="detail__summary">{state.summary}</p>
                        
                    </div>
                </div>

            );

        } else{
            return null;
        }
    }
}

export default Detail;