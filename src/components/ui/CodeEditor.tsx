import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const CodeEditor: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-3xl mx-auto"
    >
      {/* Editor Window */}
      <div className="overflow-hidden bg-gray-900 shadow-2xl rounded-2xl">
        {/* Header - Browser-like */}
        <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="px-3 py-1 text-xs text-gray-400 bg-gray-900 rounded max-w-fit">
              sistemaAcademico.ts
            </div>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          <TypeAnimation
            sequence={[
              // Comentario inicial
              '// Sistema Académico\n',
              200,
              '// Sistema Académico\nconst tesis = {\n',
              100,
              '// Sistema Académico\nconst tesis = {\n  perfil: "Definido ✓",\n',
              100,
              '// Sistema Académico\nconst tesis = {\n  perfil: "Definido ✓",\n  proyecto: "React + Node.js",\n',
              100,
              '// Sistema Académico\nconst tesis = {\n  perfil: "Definido ✓",\n  proyecto: "React + Node.js",\n  database: "PostgreSQL"\n',
              100,
              '// Sistema Académico\nconst tesis = {\n  perfil: "Definido ✓",\n  proyecto: "React + Node.js",\n  database: "PostgreSQL"\n}\n\n',
              300,
              '// Sistema Académico\nconst tesis = {\n  perfil: "Definido ✓",\n  proyecto: "React + Node.js",\n  database: "PostgreSQL"\n}\n\ntesis.defender()\n',
              400,
              '// Sistema Académico\nconst tesis = {\n  perfil: "Definido ✓",\n  proyecto: "React + Node.js",\n  database: "PostgreSQL"\n}\n\ntesis.defender()\n// ✅ Aprobado - Nota: 8.7/10',
              1500,
            ]}
            wrapper="div"
            speed={70}
            style={{
              whiteSpace: 'pre-wrap',
              display: 'block',
              color: '#e5e7eb',
              minHeight: '180px',
              fontFamily: 'monospace',
            }}
            repeat={Infinity}
            cursor={true}
            className="text-sm sm:text-base"
          />
        </div>

        {/* Footer - Status bar */}
        <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-400 bg-gray-800 border-t border-gray-700">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <span className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></span>
              TypeScript
            </span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Ln 24, Col 29</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;
