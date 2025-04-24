import { Charge, External$Charge, Schemas$Charge } from "./charge";
import {
  External$SetupAttempt,
  Schemas$SetupAttempt,
  SetupAttempt,
} from "./setup-attempt";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SepaDebitGeneratedFrom = {
  /**
   * The ID of the Charge that generated this PaymentMethod, if any.
   */
  charge?: (string | Charge) | undefined;
  /**
   * The ID of the SetupAttempt that generated this PaymentMethod, if any.
   */
  setupAttempt?: (string | SetupAttempt) | undefined;
};

/**
 * @internal
 * SepaDebitGeneratedFrom without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SepaDebitGeneratedFrom = {
  charge?: (string | External$Charge) | undefined;
  setup_attempt?: (string | External$SetupAttempt) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SepaDebitGeneratedFrom
 */
const SchemaIn$SepaDebitGeneratedFrom: z.ZodType<
  SepaDebitGeneratedFrom, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.in)]).optional(),
    setup_attempt: z
      .union([z.string(), z.lazy(() => Schemas$SetupAttempt.in)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      setup_attempt: "setupAttempt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SepaDebitGeneratedFrom
 */
const SchemaOut$SepaDebitGeneratedFrom: z.ZodType<
  External$SepaDebitGeneratedFrom, // output type of this zod object
  z.ZodTypeDef,
  SepaDebitGeneratedFrom // the object to be transformed
> = z
  .object({
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.out)]).optional(),
    setupAttempt: z
      .union([z.string(), z.lazy(() => Schemas$SetupAttempt.out)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      setupAttempt: "setup_attempt",
    });
  });

export const Schemas$SepaDebitGeneratedFrom = {
  in: SchemaIn$SepaDebitGeneratedFrom,
  out: SchemaOut$SepaDebitGeneratedFrom,
};
