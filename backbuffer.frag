precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D backbuffer;

void main() {
	vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
	float t = time * 2.7;
	p = p * p * 2.;

	// p += vec2(0.5*sin(time + p.y*5.),0.2*sin(time + p.x* 2.));
	// p += vec2(0.7*sin(time + p.y*1.),0.6*sin(time + p.x* 4.));
	// p += vec2(0.9*sin(time + p.y*5.),0.4*sin(time + p.x* 4.));

  float c = 0.;
	// c += 0.01 / length(p - vec2(sin(t * 1.)));

	c += 0.01 / length(p - vec2(cos(t * 1.),1));
	c += 0.01 / length(p - vec2(1,cos(t * 1.)));

	c += 0.01 / length(p - vec2(sin(t * 2.), cos(t * 1.)));
	c += 0.01 / length(p - vec2(sin(t * 1.3), cos(t * .8)));
	c += 0.01 / length(p - vec2(sin(t * .9 + time), cos(t * 1.7)));
	c += 0.01 / length(p - vec2(cos(t * .47), sin(t * 1.9 + time)));
	c -= 0.01 / length(p - vec2(sin(t * 2.), sin(t * 0.2 )));

	vec4 b = texture2D(backbuffer, gl_FragCoord.xy / resolution);

	gl_FragColor = c * vec4(0.2, 0.3, 0.8, 1) + b * 0.9;
}
