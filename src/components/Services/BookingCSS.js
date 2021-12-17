import styled from 'styled-components';
import posed from 'react-pose';

const PosedBookingWrapper = posed.div({
  initialPose: 'open',
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -400,
  },
});

export const BookingWrapper = styled(PosedBookingWrapper)`
  padding-bottom: 50px;
  width: 100%;
  color: #fff;
  margin-top: 25px;
  overflow: hidden;

  .grid {
    max-width: 820px;
    margin: 0 auto 20px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    transition: 250ms all ease;
    .grid-1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon-box {
        /* min-width: 100px; */
        width: 50px;
        height: 50px;
        text-align: center;
        background: var(--font-color-header);
        display: grid;
        place-items: center;
        box-shadow: 0 3px 2px -1px rgba(0, 0, 0, 0.6);
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
        background: rgba(255, 255, 255, 0.25);
        display: grid;
        place-items: center;
        box-shadow: 0 3px 2px -1px rgba(0, 0, 0, 0.6);
        color: #fff;
        text-shadow: var(--font-shadow-header);
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

          option.greyed {
            background: #d4d4d4;
          }
        }
      }
      .input-radio-parent {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        input {
          margin-left: 15px;
        }
      }
    }
  }

  // additional edit of reusable button
  button {
    margin-top: 55px;
  }
`;
// PAY

export const PayWrapper = styled.div`
  transition: all 500ms ease;
  position: absolute;
  top: 0;
  left: 50%;
  /* margin-top: 50px; */
  margin: 50px auto 0;

  .pay-description {
    margin: 50px auto;
  }

  a,
  button {
    width: 100%;
    text-decoration: none;
  }
  .back-pay-btn {
    background: transparent;
    &:hover {
      background: white;
    }
  }
`;
