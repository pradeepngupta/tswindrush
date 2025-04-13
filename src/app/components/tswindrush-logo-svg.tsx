'use client';

interface TSWindRushLogoSVGProps {
	theme: string; // Accept the theme as a prop
}

export const TSWindRushLogoSVGComponent = ({ theme }: TSWindRushLogoSVGProps) => {
	return (
		<svg
			baseProfile="full"
			height="200px"
			version="1.1"
			width="200px"
			xmlns="http://www.w3.org/2000/svg"
			className={theme}
		>
			<style>{`/* Add your styles here */
             /* Default Theme (Dark) */
    .outer { fill: blue; stroke: silver; }
    .inner { fill: silve; stroke: blue; }
    .triangle { fill: blue; }
    .text { fill: gray; letter-spacing: 1px; }

    .light .outer { fill: white; stroke: blue; }
    .light .inner { fill: blue; stroke: blue; }
    .light .triangle { fill: white; }
    .light .text { fill: blue; letter-spacing: 1px; }
	
	  .dark .outer { fill: blue; stroke: silver; }
    .dark .inner { fill: silver; stroke: blue; }
    .dark .triangle { fill: blue; }
    .dark .text { fill: gray; letter-spacing: 1px; }
    
    .monochrome-dark .outer { fill: black; stroke: silver; }
    .monochrome-dark .inner { fill: silver; stroke: black; }
    .monochrome-dark .triangle { fill: black; }
    .monochrome-dark .text { fill: gray; letter-spacing: 1px; }

    .monochrome-light .outer { fill: white; stroke: black; }
    .monochrome-light .inner { fill: black; stroke: white; }
    .monochrome-light .triangle { fill: white; }
    .monochrome-light .text { fill: black; letter-spacing: 1px; }
            `}</style>
			<circle className="outer" cx="100" cy="100" r="70" strokeWidth="3" />
			<circle className="inner" cx="100" cy="100" r="40" strokeWidth="2" />
			<path className="triangle" d="M 100 30 L 110 80 L 100 100 L 90 80 Z" />
			<path className="triangle" d="M 100 170 L 110 120 L 100 100 L 90 120 Z" />
			<path className="triangle" d="M 30 100 L 80 90 L 100 100 L 80 110 Z" />
			<path className="triangle" d="M 170 100 L 120 90 L 100 100 L 120 110 Z" />
			<text className="text" fontFamily="Arial" fontWeight="bold" fontSize="12">
				<textPath href="#textPathCircle" startOffset="20%">
					T S W I N D R U S H
				</textPath>
			</text>
			<defs>
				<path id="textPathCircle" d="M30 95a70 70 0 01140 5" fill="none" />
			</defs>
		</svg>
	);
};
