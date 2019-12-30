import React from "react";
import { Card } from "antd";

import { Link } from '@reach/router'

import DecorationTag from "./DecorationTag";
import { ItemAttributes } from 'types'

const { Meta } = Card;

export default function Item(props: ItemAttributes) {
  return (
    <Link to={"/post" + props.path}>
      <Card
        className="item--card"
        bordered={true}
        hoverable={true}
        cover={
          <img
            src="/icon_blur.png"
            data-src="/icon_blur.png"
            data-srcset={props.img}
            className="item--card__img lazy"
            alt="card--icon"
          />
        }
        style={{
          width: 300,
          margin: "24px auto"
        }}
      >
        <Meta
          title={props.name}
          description={
            <div className="item--card__description">{props.description}</div>
          }
        />
        <DecorationTag tags={props.tag} />
      </Card>
    </Link>
  );
}
