import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceCodeVerificationFlow = {
  /**
   * The number of attempts remaining to authenticate the source object with a verification code.
   */
  attemptsRemaining: number;
  /**
   * The status of the code verification, either `pending` (awaiting verification, `attempts_remaining` should be greater than 0), `succeeded` (successful verification) or `failed` (failed verification, cannot be verified anymore as `attempts_remaining` should be 0).
   */
  status: string;
};

/**
 * @internal
 * SourceCodeVerificationFlow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCodeVerificationFlow = {
  attempts_remaining: number;
  status: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCodeVerificationFlow
 */
const SchemaIn$SourceCodeVerificationFlow: z.ZodType<
  SourceCodeVerificationFlow, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attempts_remaining: z.number().int(),
    status: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attempts_remaining: "attemptsRemaining",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCodeVerificationFlow
 */
const SchemaOut$SourceCodeVerificationFlow: z.ZodType<
  External$SourceCodeVerificationFlow, // output type of this zod object
  z.ZodTypeDef,
  SourceCodeVerificationFlow // the object to be transformed
> = z
  .object({
    attemptsRemaining: z.number().int(),
    status: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attemptsRemaining: "attempts_remaining",
      status: "status",
    });
  });

export const Schemas$SourceCodeVerificationFlow = {
  in: SchemaIn$SourceCodeVerificationFlow,
  out: SchemaOut$SourceCodeVerificationFlow,
};
