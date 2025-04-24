import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCancelBody
 */
export type SetupIntentCancelBody = {
  /**
   * Reason for canceling this SetupIntent. Possible values are: `abandoned`, `requested_by_customer`, or `duplicate`
   */
  cancellationReason?:
    | ("abandoned" | "duplicate" | "requested_by_customer")
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (("abandoned" | "duplicate" | "requested_by_customer") | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SetupIntentCancelBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCancelBody = {
  cancellation_reason?:
    | ("abandoned" | "duplicate" | "requested_by_customer")
    | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (("abandoned" | "duplicate" | "requested_by_customer") | undefined)
    | (string[] | undefined)
    | External$SetupIntentCancelBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCancelBody
 */
const SchemaIn$SetupIntentCancelBody: z.ZodType<
  SetupIntentCancelBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cancellation_reason: z
      .enum(["abandoned", "duplicate", "requested_by_customer"])
      .optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cancellation_reason: "cancellationReason",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCancelBody
 */
const SchemaOut$SetupIntentCancelBody: z.ZodType<
  External$SetupIntentCancelBody, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCancelBody // the object to be transformed
> = z
  .object({
    cancellationReason: z
      .enum(["abandoned", "duplicate", "requested_by_customer"])
      .optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cancellationReason: "cancellation_reason",
      expand: "expand",
    });
  });

export const Schemas$SetupIntentCancelBody = {
  in: SchemaIn$SetupIntentCancelBody,
  out: SchemaOut$SetupIntentCancelBody,
};
