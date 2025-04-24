import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RespondRequest
 */
export type RespondRequest = {
  /**
   * Whether to simulate the user confirming that the transaction was legitimate (true) or telling Stripe that it was fraudulent (false).
   */
  confirmed: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  authorization: string;
};

/**
 * @internal
 * RespondRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RespondRequest = {
  confirmed: boolean;
  expand?: string[] | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RespondRequest
 */
const SchemaIn$RespondRequest: z.ZodType<
  RespondRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    confirmed: z.boolean(),
    expand: z.array(z.string()).optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      confirmed: "confirmed",
      expand: "expand",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RespondRequest
 */
const SchemaOut$RespondRequest: z.ZodType<
  External$RespondRequest, // output type of this zod object
  z.ZodTypeDef,
  RespondRequest // the object to be transformed
> = z
  .object({
    confirmed: z.boolean(),
    expand: z.array(z.string()).optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      confirmed: "confirmed",
      expand: "expand",
      authorization: "authorization",
    });
  });

export const Schemas$RespondRequest = {
  in: SchemaIn$RespondRequest,
  out: SchemaOut$RespondRequest,
};
