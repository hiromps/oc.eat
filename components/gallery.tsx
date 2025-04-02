"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const items = [
    {
      type: "video",
      url: "/videos/short1.mp4",
      thumbnail: "/images/thumbnail1.jpg",
    },
    {
      type: "video",
      url: "/videos/short2.mp4",
      thumbnail: "/images/thumbnail1.jpg",
    },
    {
      type: "video",
      url: "/videos/short3.mp4",
      thumbnail: "/images/thumbnail1.jpg",
    },
    {
      type: "video",
      url: "/videos/short4.mp4",
      thumbnail: "/images/thumbnail2.jpg",
    },
    {
      type: "video",
      url: "/videos/short5.mp4",
      thumbnail: "/images/thumbnail1.jpg",
    },
    {
      type: "video",
      url: "/videos/short6.mp4",
      thumbnail: "/images/thumbnail1.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">ギャラリー</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg group [aspect-ratio:9/16]"
              onMouseEnter={() => setHoveredVideo(index)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.url}
                    poster={item.thumbnail}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                    playsInline
                    preload="metadata"
                  />
                  {hoveredVideo === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  )}
                </>
              ) : (
                <img
                  src={item.url}
                  alt={`Gallery item ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;