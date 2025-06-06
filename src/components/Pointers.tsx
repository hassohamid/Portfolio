import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export default function Pointers() {
  return (
    <div className="mt-15 md:mt-1 pt-8 border-t border-border/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            1+
          </span>
          <span className="text-xs md:text-sm text-muted-foreground mt-1">
            Years Experience
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-4 text-center">
          <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            25+
          </span>
          <span className="text-xs md:text-sm text-muted-foreground mt-1">
            Project Contributions
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-4 text-center">
          <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            20+
          </span>
          <span className="text-xs md:text-sm text-muted-foreground mt-1">
            Technologies Explored
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-4 text-center">
          <Badge className="text-2xl  font-bold bg-emerald-500 ">100%</Badge>
          <span className="text-xs md:text-sm text-muted-foreground mt-1">
            On-time Delivery
          </span>
        </div>
      </motion.div>
    </div>
  );
}
