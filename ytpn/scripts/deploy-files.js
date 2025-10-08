#!/usr/bin/env node

/**
 * Deployment script to copy files from deployment_files to ../docs
 * This script is OS/shell agnostic and handles file copying for static site deployment
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Build the Next.js application
exec('next build');

// Get the directory paths
const deploymentFilesDir = path.join(__dirname, '..', 'deployment_files');
const docsDir = path.join(__dirname, '..', '..', 'docs');

// Ensure docs directory exists
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Function to copy a file
function copyFile(sourcePath, destPath) {
  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Copied: ${path.relative(process.cwd(), sourcePath)} → ${path.relative(process.cwd(), destPath)}`);
  } catch (error) {
    console.error(`✗ Failed to copy ${sourcePath}:`, error.message);
    process.exit(1);
  }
}

// Function to copy directory recursively
function copyDirectory(sourceDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const items = fs.readdirSync(sourceDir);
  
  for (const item of items) {
    const sourcePath = path.join(sourceDir, item);
    const destPath = path.join(destDir, item);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      copyFile(sourcePath, destPath);
    }
  }
}

// Main execution
console.log('🚀 Starting deployment file copy...');
console.log(`📁 Source: ${deploymentFilesDir}`);
console.log(`📁 Destination: ${docsDir}`);

// Check if deployment_files directory exists
if (!fs.existsSync(deploymentFilesDir)) {
  console.error(`✗ Deployment files directory not found: ${deploymentFilesDir}`);
  process.exit(1);
}

// Copy all files from deployment_files to docs
try {
  copyDirectory(deploymentFilesDir, docsDir);
  console.log('✅ Deployment files copied successfully!');
  process.exit(0);  
} catch (error) {
  console.error('✗ Error during deployment file copy:', error.message);
  process.exit(1);
}