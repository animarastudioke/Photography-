const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

/**
 * Build an auto-optimized Cloudinary delivery URL from a public ID, e.g.
 * cld("portfolio/wedding-01") -> https://res.cloudinary.com/<cloud>/image/upload/f_auto,q_auto,c_fill,w_1600/portfolio/wedding-01
 */
export function cld(publicId: string, width = 1600): string {
  if (!CLOUD_NAME) return "";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_fill,w_${width}/${publicId}`;
}

/** Unsigned client-side upload — used by the admin content flow, not by public visitors. */
export async function uploadToCloudinary(file: File): Promise<string> {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error("Cloudinary isn't configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and _UPLOAD_PRESET.");
  }
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Upload failed");
  const data = await res.json();
  return data.secure_url as string;
}
