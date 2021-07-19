import React, {useState} from 'react';

export const Form = () => {
    const [reviewList, setReviewList] = useState([]);
    const [review, setReview] = useState('');
    const [movieName, setMovieName] = useState('');

    const submitNewReview = () => {
        const newReview ={
            name: movieName,
            movieReview: review
        } 
        setReviewList(reviewList.concat(newReview));
        setMovieName('');
        setReview('');
    }

    const displayList = reviewList.map((e, key) => {
        return(
            <div className="nameAndReviewContainer">
                <div>
                    <div className="textFont">Movie Name:</div> 
                    <div className="listFont"> {e.name}</div>
                </div>
                <br />
                <div>
                    <div className="textFont">Review: </div>
                    <div className="listFont"> {e.movieReview}</div>
                </div>
            </div>
        )
    }); 
           
    return(
        <div>
            <form>
                <h1>CRUD APPLICATION</h1>
                <div className="form">
                    <label> Movie Name:</label>
                    <input 
                         type="text"
                         name="movieName" 
                         placeholder="Enter Movie Name" 
                         value={movieName}
                         onChange={e => setMovieName(e.target.value)}
                    />
                    <label>Movie Review:</label>
                    <textarea
                        type="text" 
                        name="review" 
                        placeholder="Enter Review" 
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    />
                    <button type="button" onClick={submitNewReview}>Submit</button>
                </div>
            </form>
            <div id="listOfMovies">
                <h2 id="listTitle">List of Movie Reviews</h2>

                <div id="containerForListOfMovies">{displayList}</div>
            </div> 
        </div>
    );
};

export default Form;