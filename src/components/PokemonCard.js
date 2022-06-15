import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon: { id, name, hp, sprites } }) {
  const [isFront, setIsFront] = useState(true);

  return (
    <Card onClick={() => setIsFront(!isFront)}>
      <div>
        <div className="image">
          {isFront ? (
            <img alt={name} src={sprites.front} />
          ) : (
            <img alt={name} src={sprites.back} />
          )}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
