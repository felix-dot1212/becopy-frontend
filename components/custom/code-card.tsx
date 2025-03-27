"use client";

import { Copy, Share, Flag, ExternalLink, Lightbulb } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CodeCardProps {
  code: string;
  language: string;
  title: string;
}

const CodeCard = ({ code, language, title }: CodeCardProps) => {
  return (
    <Card className="bg-[#1f1f2b] border-[#3c3c3c] h-full">
      <CardHeader className="p-4 border-b border-[#3c3c3c] flex justify-between items-center">
        <CardTitle className="text-white text-base sm:text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <ScrollArea className="h-[200px] sm:h-[250px] lg:h-[300px] w-full text-sm">
          <Highlight theme={themes.vsDark} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={{ ...style, background: 'transparent' }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className="text-gray-500 mr-4">{i + 1}</span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </ScrollArea>
      </CardContent>
      <CardFooter className="bg-[#202938] p-2 sm:p-4 border-t border-[#3c3c3c] flex justify-center space-x-2 sm:space-x-6 items-center rounded-lg">
        <button className="text-gray-400 hover:text-white transition-colors"><Copy className="h-4 w-4 sm:h-5 sm:w-5" /></button>
        <button className="text-gray-400 hover:text-white transition-colors"><Share className="h-4 w-4 sm:h-5 sm:w-5" /></button>
        <button className="text-gray-400 hover:text-white transition-colors"><Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" /></button>
        <button className="text-gray-400 hover:text-white transition-colors"><Flag className="h-4 w-4 sm:h-5 sm:w-5" /></button>
        <button className="text-gray-400 hover:text-white transition-colors"><ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" /></button>
      </CardFooter>
    </Card>
  )
}

export default CodeCard;