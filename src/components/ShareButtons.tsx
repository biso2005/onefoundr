'use client';

import { Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  const fullUrl = `https://onefoundr.com${url}`;
  
  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
      '_blank'
    );
  };
  
  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      '_blank'
    );
  };
  
  const copyLink = async () => {
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const buttonClass = "p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100";
  
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs text-gray-400 mr-2">Share:</span>
      <button onClick={shareTwitter} className={buttonClass} aria-label="Share on Twitter">
        <Twitter size={16} />
      </button>
      <button onClick={shareLinkedIn} className={buttonClass} aria-label="Share on LinkedIn">
        <Linkedin size={16} />
      </button>
      <button onClick={copyLink} className={buttonClass} aria-label="Copy link">
        {copied ? <Check size={16} className="text-emerald-500" /> : <LinkIcon size={16} />}
      </button>
    </div>
  );
}
