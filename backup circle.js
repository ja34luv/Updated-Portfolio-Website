* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}

#landing_page {
  height: 100vh;
}

#gallery {
  position: relative;
  width: 60rem;
  height: 60rem;
  padding: 10.16px;
  border: solid 5px black;
  border-radius: 50%;
  margin: auto;
}

#gallery .gallery_item {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -146.165px 0 0 -103.33px;
  width: 206.66px; /* A4 in pixels is 2480 x 3508 px divide this by 12 */
  height: 292.33px;
  background-color: gray;
}

#gallery .gallery_item img {
  display: block;
  width: 100%;
  height: 100%;
}

.deg0 {
  transform: translate(30rem) rotate(90deg);
} /* 30rem = half the width of the wrapper */
.deg22_5 {
  transform: rotate(22.5deg) translate(30rem) rotate(-22.5deg) rotate(112.5deg);
}
.deg45 {
  transform: rotate(45deg) translate(30rem) rotate(-45deg) rotate(135deg);
}
.deg67_5 {
  transform: rotate(67.5deg) translate(30rem) rotate(-67.5deg) rotate(157.5deg);
}
.deg90 {
  transform: rotate(90deg) translate(30rem) rotate(-90deg) rotate(180deg);
}
.deg112_5 {
  transform: rotate(112.5deg) translate(30rem) rotate(-112.5deg)
    rotate(202.5deg);
}
.deg135 {
  transform: rotate(135deg) translate(30rem) rotate(-135deg) rotate(225deg);
}
.deg157_5 {
  transform: rotate(157.5deg) translate(30rem) rotate(-157.5deg)
    rotate(247.5deg);
}
.deg180 {
  transform: translate(-30rem) rotate(270deg);
}
.deg202_5 {
  transform: rotate(202.5deg) translate(30rem) rotate(-202.5deg)
    rotate(292.5deg);
}

.deg225 {
  transform: rotate(225deg) translate(30rem) rotate(-225deg) rotate(315deg);
}

.deg270 {
  transform: rotate(270deg) translate(30rem) rotate(-270deg);
}

.deg315 {
  transform: rotate(315deg) translate(30rem) rotate(-315deg) rotate(405deg);
}
