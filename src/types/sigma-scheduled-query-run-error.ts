import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SigmaScheduledQueryRunError = {
  /**
   * Information about the run failure.
   */
  message: string;
};

/**
 * @internal
 * SigmaScheduledQueryRunError without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SigmaScheduledQueryRunError = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SigmaScheduledQueryRunError
 */
const SchemaIn$SigmaScheduledQueryRunError: z.ZodType<
  SigmaScheduledQueryRunError, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SigmaScheduledQueryRunError
 */
const SchemaOut$SigmaScheduledQueryRunError: z.ZodType<
  External$SigmaScheduledQueryRunError, // output type of this zod object
  z.ZodTypeDef,
  SigmaScheduledQueryRunError // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$SigmaScheduledQueryRunError = {
  in: SchemaIn$SigmaScheduledQueryRunError,
  out: SchemaOut$SigmaScheduledQueryRunError,
};
