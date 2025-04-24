import {
  CardGeneratedFromPaymentMethodDetails,
  External$CardGeneratedFromPaymentMethodDetails,
  Schemas$CardGeneratedFromPaymentMethodDetails,
} from "./card-generated-from-payment-method-details";
import {
  External$SetupAttempt,
  Schemas$SetupAttempt,
  SetupAttempt,
} from "./setup-attempt";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodCardGeneratedCard = {
  /**
   * The charge that created this object.
   */
  charge?: string | null | undefined;
  paymentMethodDetails?: CardGeneratedFromPaymentMethodDetails | undefined;
  /**
   * The ID of the SetupAttempt that generated this PaymentMethod, if any.
   */
  setupAttempt?: (string | SetupAttempt) | undefined;
};

/**
 * @internal
 * PaymentMethodCardGeneratedCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCardGeneratedCard = {
  charge?: string | null | undefined;
  payment_method_details?:
    | External$CardGeneratedFromPaymentMethodDetails
    | undefined;
  setup_attempt?: (string | External$SetupAttempt) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCardGeneratedCard
 */
const SchemaIn$PaymentMethodCardGeneratedCard: z.ZodType<
  PaymentMethodCardGeneratedCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    charge: z.string().nullable().optional(),
    payment_method_details:
      Schemas$CardGeneratedFromPaymentMethodDetails.in.optional(),
    setup_attempt: z
      .union([z.string(), z.lazy(() => Schemas$SetupAttempt.in)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      payment_method_details: "paymentMethodDetails",
      setup_attempt: "setupAttempt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCardGeneratedCard
 */
const SchemaOut$PaymentMethodCardGeneratedCard: z.ZodType<
  External$PaymentMethodCardGeneratedCard, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCardGeneratedCard // the object to be transformed
> = z
  .object({
    charge: z.string().nullable().optional(),
    paymentMethodDetails:
      Schemas$CardGeneratedFromPaymentMethodDetails.out.optional(),
    setupAttempt: z
      .union([z.string(), z.lazy(() => Schemas$SetupAttempt.out)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      paymentMethodDetails: "payment_method_details",
      setupAttempt: "setup_attempt",
    });
  });

export const Schemas$PaymentMethodCardGeneratedCard = {
  in: SchemaIn$PaymentMethodCardGeneratedCard,
  out: SchemaOut$PaymentMethodCardGeneratedCard,
};
