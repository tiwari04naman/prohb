import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function LikeComp(props) {
    const [color ,setColor]=useState(null);
    const [color1 ,setColor1]=useState(null);
    const [like, setLike] = useState(parseInt(props.count));
    const [dislike, setDislike] = useState(parseInt(props.count));
    const onclick = () => {
        if (color ==="blue") {
          setColor("black");
          setLike(like - 1);
        } else {
          setColor("blue");
          setLike(like + 1);
        }
      };
      const onclick1 = () => {
        if (color1 ==="blue") {
          setColor1("black");
          setDislike(dislike - 1);
        } else {
          setColor1("blue");
          setDislike(dislike + 1);
        }
      };
  return (
    
    <div class="mt-5 pt-5">
    <div className="ms-5 mt-5">
      <span className="me-5">Likes : {like}</span>
      <FontAwesomeIcon
        icon={faThumbsUp}
        size="2xl"
        color={color}
        onClick={onclick}
      />
    </div>

    <div className="ms-5 mt-5">
      <span className="me-5">Dislikes : {dislike}</span>
      <FontAwesomeIcon
        icon={faThumbsDown}
        size="2xl"
        color={color1}
        onClick={onclick1}
      />
    </div>

  
    </div>
  );
}
