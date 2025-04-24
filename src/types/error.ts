import { ApiErrors, External$ApiErrors, Schemas$ApiErrors } from "./api-errors";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An error response from the Stripe API
 */
export type Error = {
  error: ApiErrors;
};

/**
 * @internal
 * Error without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Error = {
  error: External$ApiErrors;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Error
 */
const SchemaIn$Error: z.ZodType<
  Error, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    error: z.lazy(() => Schemas$ApiErrors.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      error: "error",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Error
 */
const SchemaOut$Error: z.ZodType<
  External$Error, // output type of this zod object
  z.ZodTypeDef,
  Error // the object to be transformed
> = z
  .object({
    error: z.lazy(() => Schemas$ApiErrors.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      error: "error",
    });
  });

export const Schemas$Error = {
  in: SchemaIn$Error,
  out: SchemaOut$Error,
};
