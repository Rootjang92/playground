import React from 'react'
import styled from 'styled-components'

const Content = ({ skyblue, className }) => {
  return (
    <div className={className}>
      <div className="content__img" />
      <div className="content__info">
        <div className="content__title" skyblue>
          Cute Puppy
        </div>
        <div className="content__description">
          Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui.
          Eos perferendis autem qui fugiat.
        </div>
      </div>
    </div>
  )
}

const StyledContent = styled(Content)`
  width: 80%;
  height: 300px;
  box-shadow: 0 0 5px 2px #ccc;
  .content__img {
    display: inline-block;
    width: 300px;
    height: 100%;
    background-image: url('https://picsum.photos/300/300?image=1062');
  }
  .content__info {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 300px);
    height: 100%;
    text-align: left;
    .content__title {
      padding: 20px 0 0 20px;
      font-size: 48px;
      color: ${props => (props.skyblue ? 'skyblue' : 'black')};
    }
    .content__description {
      padding: 20px;
      font-size: 30px;
      font-style: italic;
      color: #888888;
    }
  }
`

export default StyledContent