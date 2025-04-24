import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoReportDocumentOptions = {
  /**
   * Array of strings of allowed identity document types. If the provided identity document isn’t one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
   */
  allowedTypes?: ("driving_license" | "id_card" | "passport")[] | undefined;
  /**
   * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document’s extracted name and date of birth.
   */
  requireIdNumber?: boolean | undefined;
  /**
   * Disable image uploads, identity document images have to be captured using the device’s camera.
   */
  requireLiveCapture?: boolean | undefined;
  /**
   * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user’s face. [Learn more](https://stripe.com/docs/identity/selfie).
   */
  requireMatchingSelfie?: boolean | undefined;
};

/**
 * @internal
 * GelatoReportDocumentOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoReportDocumentOptions = {
  allowed_types?: ("driving_license" | "id_card" | "passport")[] | undefined;
  require_id_number?: boolean | undefined;
  require_live_capture?: boolean | undefined;
  require_matching_selfie?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoReportDocumentOptions
 */
const SchemaIn$GelatoReportDocumentOptions: z.ZodType<
  GelatoReportDocumentOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allowed_types: z
      .array(z.enum(["driving_license", "id_card", "passport"]))
      .optional(),
    require_id_number: z.boolean().optional(),
    require_live_capture: z.boolean().optional(),
    require_matching_selfie: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowed_types: "allowedTypes",
      require_id_number: "requireIdNumber",
      require_live_capture: "requireLiveCapture",
      require_matching_selfie: "requireMatchingSelfie",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoReportDocumentOptions
 */
const SchemaOut$GelatoReportDocumentOptions: z.ZodType<
  External$GelatoReportDocumentOptions, // output type of this zod object
  z.ZodTypeDef,
  GelatoReportDocumentOptions // the object to be transformed
> = z
  .object({
    allowedTypes: z
      .array(z.enum(["driving_license", "id_card", "passport"]))
      .optional(),
    requireIdNumber: z.boolean().optional(),
    requireLiveCapture: z.boolean().optional(),
    requireMatchingSelfie: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowedTypes: "allowed_types",
      requireIdNumber: "require_id_number",
      requireLiveCapture: "require_live_capture",
      requireMatchingSelfie: "require_matching_selfie",
    });
  });

export const Schemas$GelatoReportDocumentOptions = {
  in: SchemaIn$GelatoReportDocumentOptions,
  out: SchemaOut$GelatoReportDocumentOptions,
};
