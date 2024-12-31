import React, { useState } from 'react';
import { Calendar, Clock, Share2, Bookmark, ExternalLink, X as CloseIcon } from 'lucide-react';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbreaking-news&psig=AOvVaw0czRoc4hWDMJIlJ9I7tAx4&ust=1735743412077000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiBmZ6i0ooDFQAAAAAdAAAAABAE';

const NewsItem = ({
    title,
    description,
    src,
    url,
    time,
    category,
    author,
    readTime = '5 min'
}) => {
    const [showSharePopup, setShowSharePopup] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const shareLinks = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        instagram: `https://www.instagram.com/direct/inbox/?url=${encodeURIComponent(url)}`,
    };

    return (
        <div className="max-w-sm rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden">
            <div className="relative">
                <img
                    src={src || DEFAULT_IMAGE}
                    alt={title}
                    className="h-48 w-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {category}
                </span>
            </div>

            <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{formatDate(time)}</span>
                    <Clock size={14} className="ml-2" />
                    <span>{readTime}</span>
                </div>

                <h3 className="mt-2 text-xl font-semibold line-clamp-2 text-gray-800">{title}</h3>

                <p className="mt-3 text-gray-600 line-clamp-3">
                    {description || "Click 'Read More' for full article details"}
                </p>

                <div className="mt-3 text-sm text-gray-500">
                    By <span className="font-medium">{author}</span>
                </div>
            </div>

            <div className="px-4 pb-4 flex justify-between items-center">
                <div className="flex gap-3">
                    <button
                        className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => setShowSharePopup(!showSharePopup)}
                    >
                        <Share2 size={16} />
                        <span className="text-sm">Share</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
                        <Bookmark size={16} />
                        <span className="text-sm">Save</span>
                    </button>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Read More
                    <ExternalLink size={16} />
                </a>
            </div>

            {showSharePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-10 justify-center">
                    <div className="bg-white p-6 rounded shadow-lg relative w-80">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
                            onClick={() => setShowSharePopup(false)}
                        >
                            <CloseIcon size={20} />
                        </button>
                        <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href={shareLinks.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800"
                            >
                                WhatsApp
                            </a>
                            <a
                                href={shareLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Facebook
                            </a>
                            <a
                                href={shareLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                Twitter
                            </a>
                            <a
                                href={shareLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-500 hover:text-red-700"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    src: PropTypes.string,
    url: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    category: PropTypes.string,
    author: PropTypes.string,
    readTime: PropTypes.string,
};

export default NewsItem;
