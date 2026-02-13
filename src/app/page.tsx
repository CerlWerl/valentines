"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhotoPairGame from "../components/PhotoPairGame";
import ValentinesProposal from "@/components/ValentinesProposal";
import TextFooter from "@/components/TextFooter";
import OrientationGuard from "@/components/OrientationGuard";
import StarrySky from '@gura_ame/starry-sky';
import '@gura_ame/starry-sky/dist/StarrySky.css';

const ANIM_DURATION = 2;

export default function Home() {
  const [showValentinesProposal, setShowValentinesProposal] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleShowProposal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowValentinesProposal(true);
    }, ANIM_DURATION * 1000);
  };

  return (
  <OrientationGuard>
    {/* 1. Background Layer: Fixed position, behind everything */}
    <div className="fixed inset-0 z-0 bg-slate-950">
      <StarrySky showForest={false} />
    </div>

    {/* 2. Content Layer: Relative position, z-index higher than background */}
    {/* Note: Removed 'bg-slate-950' from here so the stars show through */}
    <main className="flex items-center justify-center min-h-screen overflow-hidden relative z-10">
      {!showValentinesProposal ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{ duration: ANIM_DURATION }}
          className="flex flex-col items-center"
        >
          <PhotoPairGame handleShowProposal={handleShowProposal} />
          <div className="mt-4 md:mt-0">
            <TextFooter />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: ANIM_DURATION }}
        >
          <ValentinesProposal />
        </motion.div>
      )}
    </main>
  </OrientationGuard>
);
}
