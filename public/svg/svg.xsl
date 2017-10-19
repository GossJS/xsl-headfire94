<xsl:stylesheet version="3.0" xml:lang="en" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/root">
        <html>
            <head>
                <meta charset="utf-8"/>
                <title>SVG</title>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="графика">
        <svg width="{@ширина}" height="{@высота}">
            <xsl:apply-templates/>
        </svg>
    </xsl:template>

    <xsl:template match="эллипс">
        <ellipse id="{@id}" fill="{@заливка}" stroke="{@ободок}" stroke-width="{@ширина-ободка}" cx="{@cx}" cy="{@cy}"
                 rx="{@rx}" ry="{@ry}"/>
    </xsl:template>
</xsl:stylesheet>