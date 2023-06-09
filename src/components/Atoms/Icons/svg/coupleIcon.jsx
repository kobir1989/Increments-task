const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={45}
    height={45}
    fill='none'
    {...props}
  >
    <path fill='url(#a)' d='M.798.751H44.17v43.372H.798z' />
    <defs>
      <pattern
        id='a'
        width={1}
        height={1}
        patternContentUnits='objectBoundingBox'
      >
        <use xlinkHref='#b' transform='scale(.02)' />
      </pattern>
      <image
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFYElEQVRoge2Ze2iXVRjHP9M5Xc2hWy63aUV20ww0i6WmdKGFFd1EZZpCWBZU0kWxgsQpxKJZZBEFGhUVGRVJVOIlR80aVuomWVYrJO0yl841t3lpv/54nsM5O3t/+73vuwX98X7h5cd5buf2nOd5zvlBggQJEiRIEB9ZIWRygNFAIZAPHAa+Azr+w3H1G/KAxcBm4BiQ8r4OYD1wQUzbs4G3gG+BI2qzBagHngcu69vwBfcDzdhB/wP8DNQhE2sATinvGHB1SLuFOsh2ei5M0PcmMunIyFFlY+hzZOUKA2SLgDVAF/A3mXdmPuKSKWQRtiELVgaMAgYBw4EpQBV2lxqAgqgTeVmVW4GZIXUqVecA8Do9dycLWIVdnI+BsSHsngl8oTqHgVrgJWBqJsU5WFeZFGYGimzgM7q7xFpgoPKfVNpJYFEEuwCnA9vp6XK1wNlBCgOQKJQC7orYmUE+shiH1E4lMAvrSjfHtAswFBiHBJ99arMZuNQXnKHMH7ErGRdT1FY7dlJL+2jTRS72HP+Cd36eUcbyGEa/AnYhbmBQg3WDr5Ed709kI+6VAqpdxg4lTotgbAwS1cyAqxzeQw59RszBVgKP98KfgETMVmCYIf6qnZYGKJwGXAnMBR4GngK2YvOIcZ924AzVuU1pfxDPVcuATnoukA+z83MMoUMJQ7wJVANtBCerTmAdMBLJCSngHtW9XdubYkxiOtDk9TU3jewS5a8zhBYllGg7D+tuKWA3csBWA48Bt9D9kM1TuU+0fae2X4wwgaHASiRMp4A3HDttSK3nY7ryvzSEeiVcq+2ntd1IuJxyjsr/pu0V2n40g95oZBHWAkex5VA11iVfUfprAfolWBcG4FUlPKjtP7V9eYhJAAxGDl6ntterfkWawa/ELp75uoAtwGRPvgBx/eNItneRiy1gAbuFH2h7A+JKUfACUhACHFR7F3kyd9C9kj4KfIjkmd5qtbdV/j6PnqP0E4ZQqoQj9D0hno+NZu5dZzIS6bqQmuwapFAMg5lq812PXqT0JkOYiswqRfChioKbsH5b7NA3KH1VDJtjVHefR5+ErZABW5it8QS3I0mvN/gyg5A8k0IKRoMDdI+MUZCHrYJdVCj9PZDywZTVyzzBLhXsDb7MSWzZ4JbrI/S3WX8zLZLLN2fAv2RdqL/fg9QtTcilZiyw0xEMU7IEyYzX3xaH1opk/mHaX6ZFcvkmZ7V4MiaY7DWEZ7GHqa+HfQSwX+3Nduim/L44hs1LVHevR9+t9Ilu578rcQcxrpaK8djQW0P3RXlf6fNi2F2guu94dPOukA9yRg4h6b4BSYKzYnQGEudLEP+uQLK0wS79vSKGXaPzjUcfrL9tvoK50W2M0Vk2NjKNC+CXKW8/0e4nAx27Ez1eo9KLfaV8JN13Eb48MViIF9M9ZGGvC1dFsHud6vwQwDM3xbuDFE3BuCVCZ7nOIE+o7mKkmHSxnOg7/qnqLAnglWNfcEb5zALs+9MjITszz0jN2AuX+RqRInIpUmocV3p5CLs3qmwLsijnIS+Q1yN3n9WOvbogA+Z+cQq4IUNny7AV6ATkMW8+EmFMaR70HaRnNeuiBClz0un7X006Q1XOABcE8IcAz2HvEEFhNRt5snkAuSjVIofd1HU7kRumj1JgjzPINsRLGpFcsgm5FT4B3AqclW4SIIdzBTbDbsZGh2nIU4w5Ewt7MxSAIh2Q2ZlFOqFi4F7sTtQT/FwbC+XAT9gyvw67onsI8YSZBiOxBzno24h9zOg3DAc+cjrpQF5U+lrODEAeFrYBfyHBYivyKhLmf5vYOBfJAf223QkSJEiQIMH/Bf8CQQ/NOPG6LBcAAAAASUVORK5CYII='
        id='b'
        width={50}
        height={50}
      />
    </defs>
  </svg>
);
export default SvgComponent;
