import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type VerificationSessionRedaction = {
  /**
   * Indicates whether this object and its related objects have been redacted or not.
   */
  status: "processing" | "redacted";
};

/**
 * @internal
 * VerificationSessionRedaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VerificationSessionRedaction = {
  status: "processing" | "redacted";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VerificationSessionRedaction
 */
const SchemaIn$VerificationSessionRedaction: z.ZodType<
  VerificationSessionRedaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    status: z.enum(["processing", "redacted"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VerificationSessionRedaction
 */
const SchemaOut$VerificationSessionRedaction: z.ZodType<
  External$VerificationSessionRedaction, // output type of this zod object
  z.ZodTypeDef,
  VerificationSessionRedaction // the object to be transformed
> = z
  .object({
    status: z.enum(["processing", "redacted"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

export const Schemas$VerificationSessionRedaction = {
  in: SchemaIn$VerificationSessionRedaction,
  out: SchemaOut$VerificationSessionRedaction,
};
