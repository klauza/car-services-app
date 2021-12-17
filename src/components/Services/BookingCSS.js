import styled from 'styled-components';

export const BookingWrapper = styled.div`
  width: 100%;
  color: #fff;
  margin-top: 25px;

  .grid {
    max-width: 820px;
    margin: 0 auto 20px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    .grid-1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon-box {
        /* min-width: 100px; */
        width: 50px;
        height: 50px;
        text-align: center;
        background: #d4d4d4;
        display: grid;
        place-items: center;
        svg {
          width: 35px;
          height: 35px;
          fill: #fff;
        }
      }
      .name-box {
        margin-left: 20px;
        padding: 0 15px;
        height: 100%;
        background: #d4d4d4;
        display: grid;
        place-items: center;
      }
    }
    .grid-2 {
      display: flex;
      align-items: center;
      justify-content: end;
      .input-box {
        input[type='text'],
        select {
          padding: 5px;
        }
      }
    }
  }

  // additional edit of reusable button
  button {
    margin-top: 55px;
  }
`;
